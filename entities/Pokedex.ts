import { ParsedPokemon } from "@/types/Pokemon";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class Pokedex {
  private static STORAGE_KEY = "myPokemon";
  private static filters = new Map<string, (p: ParsedPokemon) => boolean>();

  static setFilter(type: string, fn: (p: ParsedPokemon) => boolean) {
    this.filters.set(type, fn);
  }

  static removeFilter(type: string) {
    this.filters.delete(type);
  }

  static clearFilters() {
    this.filters.clear();
  }

  static async list(): Promise<ParsedPokemon[]> {
    const raw = await AsyncStorage.getItem(this.STORAGE_KEY);
    const parsed: ParsedPokemon[] = raw ? JSON.parse(raw) : [];

    const activeFilters = Array.from(this.filters.values());
    return activeFilters.reduce(
      (acc, filterFn) => acc.filter(filterFn),
      parsed
    );
  }

  static async add(pokemon: ParsedPokemon): Promise<void> {
    const current = await this.getAll();
    const exists = current.some((p) => p.id === pokemon.id);
    if (!exists) {
      const updated = [...current, pokemon];
      await AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
    }
  }

  static async remove(id: number): Promise<void> {
    const current = await this.getAll();
    const updated = current.filter((p) => p.id !== id);
    await AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
  }

  static async isSaved(id: number): Promise<boolean> {
    const current = await this.getAll();
    return current.some((p) => p.id === id);
  }

  static async getAll(): Promise<ParsedPokemon[]> {
    const raw = await AsyncStorage.getItem(this.STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }
}
