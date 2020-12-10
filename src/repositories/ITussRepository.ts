import { Tuss } from "../entities/Tuss"

export interface ITussRepository {
  findAll(page, limit): Promise<Tuss>
  findByCode(code: string): Promise<Tuss>
  save(tuss: Tuss): Promise<void>
}