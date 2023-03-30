export interface IClientDetail {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  company: ICompany
}

interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string
}
