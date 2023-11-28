import { User } from 'types'

export interface Violation {
  _id: string
  createdAt: string
  updatedAt: string
  violationInfo: ViolationInfo
  review: ViolationReview[]
  courtInfo: CourtInfo
}

export interface ViolationInfo {
  title: string
  status: ViolationStatus
  user: ViolationInspector
  discoveryDate: string | null
  violationType: string | null
  district: string | null
  location: string | null
  description: string | null
}

export interface ViolationReview {
  user: string
  status: ReviewStatus
  date: string
  message: string | null
}

export interface CourtInfo {
  endDate: string | null
  courtDecision: string | null
  amount: number | null
}

export type ViolationInspector = Pick<User, '_id' | 'lastName' | 'firstName' | 'middleName'>
export type ReviewStatus = 'approve' | 'decline'
export type ViolationStatus = 'created' | 'coordination' | 'revision' | 'court' | 'completed'
