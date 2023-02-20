export type DataType = {
    groom: {
      name: string
      fullname: string
      fatherName: string
      motherName: string
      ig: string
      photo: string
    },
    bride: {
      name: string
      fullname: string
      fatherName: string
      motherName: string
      ig: string
      photo: string
    }
  }

export type EventType = {
  title: string
  date: string
  times: EventTimeType[]
  locationTitle: string
  location: string
  mapLink: string
  mapIframe: string
}

export type EventTimeType = {
  title: string,
  time: string,
}

export type GiftType = {
  bankAccount: GiftBankType[]
  address: GiftAddressType[]
}

export type GiftBankType = {
  nameAcount: string
  bankAcount: string
  accountNumber: string
}

export type GiftAddressType = {
  name: string
  phoneNumber: string
  addres: string
}
