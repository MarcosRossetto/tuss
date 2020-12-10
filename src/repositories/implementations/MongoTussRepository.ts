import { Tuss } from '../../entities/Tuss'
import { ITussRepository } from '../ITussRepository'
import createError from 'http-errors'
import '../../database/Schemas/tuss.schema'
import mongoose from 'mongoose'
const TussMongo = mongoose.model('TussSchema')

export class MongoTussRepository implements ITussRepository {

  async findAll(page: number, limit: number): Promise<any> {
    try {
      const response = await TussMongo.paginate({}, { page: page, limit: limit || 10 })
      const data = {
        page: response.page,
        limit: response.limit,
        totalPages: response.totalPages,
        tuss: response.docs.map(data => {
          return {
            id: data._id,
            code: data.code,
            term: data.term
          }
        })
      }
      return data
    } catch (error) {
      throw createError(500, 'Unexpected error in database.')
    }
  }

  async findByCode(code: string): Promise<any> {
    try {
      const response = await TussMongo.findOne({
        code: code
      })

      if (response !== null) {
        return { id: response._id, code: response['code'], term: response['term'] }
      }
    } catch (error) {
      throw createError(500, 'Unexpected error in database.')
    }
  }

  async save(tuss: Tuss): Promise<void> {
    try {
      const data = new TussMongo(tuss)
      await data.save()
    } catch (error) {
      throw createError(500, 'Unexpected error in database.')
    }
  }
}