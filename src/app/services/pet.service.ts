import { HttpClient, } from '@angular/common/http'
import { Injectable, } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private baseUrl = 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=18'

  constructor(private readonly http: HttpClient) { }

  query (filters: PetFilterType) {
    let url = this.baseUrl
    filters.page ? url += `&$skip=${filters.page}` : '&$skip=18'
    filters.kind ? url += `&animal_kind=${filters.kind}` : undefined
    return this.http.get<Pet[]>(url)
  }
}
