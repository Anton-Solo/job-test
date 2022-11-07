export interface IJob {
    id: number
    name: string
    departament: string
    country: string
    city: string
    rating?: number
    image: string
    date: string
    brutto: string
    description: string
    responsopilities: string
    descriptionBenefits: string[]
    type: string[]
    benefits: string[]
}