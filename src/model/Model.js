export class TypeProperty {
  constructor(id, type, description) {
    this.id = id
    this.type = type
    this.description = description
  }
}

export class Lessor {
  constructor(id, firstName, lastName, dni, phone, photoUrl) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.dni = dni
    this.phone = phone
    this.photoUrl = photoUrl
  }
}

export class Publication {
  constructor(id, title, description, imageURL, price, rating, lessor, typeProperty) {
    this.id = id
    this.title = title
    this.description = description
    this.imageURL = imageURL
    this.price = price
    this.rating = rating
    this.lessor = lessor
    this.typeProperty = typeProperty
  }
}

export class Comment {
  constructor(id,publicationId, author, content, date) {
    this.id = id
    this.publicationId = publicationId
    this.author = author
    this.content = content
    this.date = date
  }
}