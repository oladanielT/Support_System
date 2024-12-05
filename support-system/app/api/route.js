import Ticket from "../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const resp = await req.json();
    const ticketdata = resp.formData;
    await Ticket.create(ticketdata);

    return NextResponse({ message: "Ticket Created" }, { status: 200 });
  } catch (error) {
    return NextResponse({ message: "Error", error }, { status: 500 });
  }
}
