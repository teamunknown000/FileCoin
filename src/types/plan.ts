/**
 * Hierarchy: `premium` > `gold` > `pro` > `standard`
 */
export enum Plans {
    standard = "standard",
    pro = "pro",
    gold = "gold",
    premium = "premium"
}

export default interface IPlan {
    name: string
    description: string
    discount: number
    isDeliveryFree: boolean
}