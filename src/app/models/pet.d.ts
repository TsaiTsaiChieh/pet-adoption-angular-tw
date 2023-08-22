type AnimalAge = 'ADULT' | 'CHILD' 
type AnimalSex  = 'N' | 'F' | 'M' 
type AnimalBody =  'SMALL' | 'MEDIUM' | 'BIG'
type AnimalKind = '狗' | '貓'
type Ternary = 'N' | 'F' | 'T'
type AnimalStatus  = 'OPEN'

interface Pet {
  animal_id: number
  animal_subid: string
  animal_area_pkid: number
  animal_shelter_pkid: number
  animal_place: string
  animal_kind: string
  animal_Variety: string
  animal_sex: AnimalSex
  animal_bodytype: AnimalBody
  animal_colour: string
  animal_age: AnimalAge
  animal_sterilization: Ternary
  animal_bacterin: Ternary
  animal_foundplace: string
  animal_title: string
  animal_status: AnimalStatus
  animal_remark: string
  animal_caption: string
  animal_opendate: string
  animal_closeddate: Date
  animal_update: string
  animal_createtime: string
  shelter_name: string
  album_file: string
  album_update: string
  cDate: string
  shelter_address: string
  shelter_tel: string
}


interface PetFilterType {
  kind?: string
  limit?: number
  page?: number
}
