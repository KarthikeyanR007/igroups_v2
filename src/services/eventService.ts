// src/services/eventService.ts

const BASE_URL = process.env.REACT_APP_API_URL;

// Normalize image URL coming from API (handles absolute + relative paths)
const normalizePhotoUrl = (raw?: string) => {
  if (!raw) return "";
  const trimmed = String(raw).trim();
  if (!trimmed) return "";

  // Already absolute URL
  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  // Fallback if BASE_URL is missing
  if (!BASE_URL) {
    return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  }

  const base = BASE_URL.replace(/\/+$/, "");
  const noLeadingSlash = trimmed.replace(/^\/+/, "");
  const path = noLeadingSlash.startsWith("storage/")
    ? noLeadingSlash
    : `storage/${noLeadingSlash}`;

  return `${base}/${path}`;
};

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
    photo:    normalizePhotoUrl(
                item.eventimage ??
                item.photo ??
                item.image ??
                item.event_image
              ),
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
