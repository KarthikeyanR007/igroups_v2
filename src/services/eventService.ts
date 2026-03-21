// src/services/eventService.ts

const BASE_URL = process.env.REACT_APP_API_URL;

// ── Types ────────────────────────────────────────────────
export interface Event {
  id: string;
  type: string;
  title: string;
  desc: string;
  date: string;
  location: string;
  seats: string;
  photo: string;
}

export interface RegisterPayload {
  eventId: string;
  name: string;
  email: string;
  phone?: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  registrationId?: string;
}

// ── Common fetch wrapper ──────────────────────────────────
const apiFetch = (url: string, options: RequestInit = {}) => {
  return fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      "ngrok-skip-browser-warning": "true",
      ...options.headers,
    },
  });
};

// ── GET: Fetch all events ────────────────────────────────
export const fetchEvents = async (): Promise<Event[]> => {
  const response = await apiFetch("/api/events/getall");

  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.statusText}`);
  }

  const json = await response.json();

  // API returns { data: [...], message: "..." }
  const list = json.data ?? json;

  // Normalize Laravel field names → frontend field names
  return list.map((item: any) => ({
    id:       String(item.id),
    type:     item.type ?? "conference",
    title:    item.eventname        ?? "",
    desc:     item.eventdiscription ?? "",
    date:     item.eventdate        ?? "",
    location: item.eventlocation    ?? "",
    seats:    item.seats            ?? "",
    photo:    item.eventimage
                ? `${BASE_URL}/storage/${item.eventimage}`
                : "",
  }));
};

// ── POST: Register for an event ──────────────────────────
export const registerForEvent = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const response = await apiFetch("/api/events/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Registration failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};