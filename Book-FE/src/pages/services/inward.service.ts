// services/inwardService.ts
export interface InwardPayload {
  book_id: number;
  shop_id: number;
  agent_id: number;
  quantity: number;
  remarks?: string;
  inward_date: string;
  created_by?: string;
}
export interface InwardEntry {
  RowId: number;
  BookName: string;
  ShopName: string;
  AgentName: string;
  Quantity: number;
  Remarks: string;
  InwardDate: string;
  Status: string;
  Active: boolean;
  CreatedBy: string;
}


export class InwardService {
  private baseUrl = "http://127.0.0.1:8000";

  async createInward(payload: InwardPayload): Promise<any> {
    console.log("📤 Inward API Payload:", payload);

    const response = await fetch(`${this.baseUrl}/inward/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to save inward: ${errorText}`);
    }

    const data = await response.json();
    console.log("✅ API RESPONSE DATA 👉", data);
    return data;
  }
  async getRecentInwards(): Promise<InwardEntry[]> {
    const response = await fetch(`${this.baseUrl}/inward/recent`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch recent inwards: ${errorText}`);
    }

    const data: InwardEntry[] = await response.json();
    return data;
  }

}

