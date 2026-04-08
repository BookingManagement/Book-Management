// services/inwardService.ts

import axios from "axios";
export interface InwardPayload {
  bookId: number;
  shopId: number;
  agentId: number;
  quantity: number;
  remarks?: string;
  inwardDate: string;
  createdBy?: string;
}
export interface InwardEntry {
  rowId: number;
  bookName: string;
  shopName: string;
  agentName: string;
  quantity: number;
  remarks: string;
  inwardDate: string;
  status: string;
  active: boolean;
  createdBy: string;
}

const API_BASE_URL =  "https://localhost:5001/api/Inward";
export class InwardService {
  
//Post
  async createInward(payload: InwardPayload): Promise<any> {
   try{
    console.log("📤 Sending Payload:", payload);
    const response = await axios.post(API_BASE_URL, payload);
    console.log("API Response:", response.data);

    return response.data;
   } catch(error: any){
    console.error("Error saving inward:", error.response?.data || error.message);
    throw error;
   }
  }

  //Get
  async getRecentInwards(): Promise<InwardEntry[]>{
    try{
      const response = await axios.get(`${API_BASE_URL}/recent`);

      return response.data;
    }catch(error:any){
      console.error("Error fetching recent inwards:", error.response?.data || error.message);
      throw error;
    }

  }
  
}
