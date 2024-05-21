"use client";
// EventForm.tsx
import React, { useState } from "react";

interface EventState {
  name: string;
  organisation: string;
  profileLink: string;
  st: string;
  venue: string;
  date: string;
  footfall: string;
  eventType: string;
  guestSpeakers: string;
}

const EventForm: React.FC = () => {
  const [state, setState] = useState<EventState>({
    name: "",
    organisation: "",
    profileLink: "",
    st: "",
    venue: "",
    date: "",
    footfall: "",
    eventType: "",
    guestSpeakers: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="bg-base-300 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Organise an Event
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-base-200 p-8 rounded-xl shadow-lg"
        >
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="input input-bordered flex items-center gap-2"
            >
              Name
              <input
                type="text"
                id="name"
                name="name"
                value={state.name}
                onChange={handleChange}
                className="grow italic"
                required
              />
            </label>
          </div>

          {/* Organisation Input */}
          <div className="mb-4">
            <label
              htmlFor="organisation"
              className="input input-bordered flex items-center gap-2"
            >
              Organisation
              <input
                type="text"
                id="organisation"
                name="organisation"
                value={state.organisation}
                onChange={handleChange}
                className="grow italic"
                required
              />
            </label>
          </div>

          {/* Profile Link Input */}
          <div className="mb-4">
            <label
              htmlFor="profileLink"
              className="input input-bordered flex items-center gap-2"
            >
              Organiser Profile Link
              <input
                type="text"
                id="profileLink"
                name="profileLink"
                value={state.profileLink}
                onChange={handleChange}
                className="grow italic"
                required
              />
            </label>
          </div>

          {/* State Input */}
          <div className="mb-4">
            <label
              htmlFor="st"
              className="input input-bordered flex items-center gap-2"
            >
              State
              <input
                type="text"
                id="st"
                name="st"
                value={state.st}
                onChange={handleChange}
                className="grow italic"
                required
              />
            </label>
          </div>

          {/* Venue Input */}
          <div className="mb-4">
            <label
              htmlFor="venue"
              className="input input-bordered flex items-center gap-2"
            >
              Venue
              <input
                type="text"
                id="venue"
                name="venue"
                value={state.venue}
                onChange={handleChange}
                className="grow italic"
                required
              />
            </label>
          </div>

          {/* Date Input */}
          <div className="mb-4">
            <label
              htmlFor="date"
              className="input input-bordered flex items-center gap-2"
            >
              Date
              <input
                type="date"
                id="date"
                name="date"
                value={state.date}
                onChange={handleChange}
                className="grow italic"
                required
              />
            </label>
          </div>

          {/* Footfall Input */}
          <div className="mb-4">
            <label
              htmlFor="footfall"
              className="input input-bordered flex items-center gap-2"
            >
              Footfall
              <input
                type="number"
                id="footfall"
                name="footfall"
                value={state.footfall}
                onChange={handleChange}
                className="grow italic"
                required
              />
            </label>
          </div>

          {/* Event Type Input */}
          <div className="mb-4">
            <label
              htmlFor="eventType"
              className="input input-bordered flex items-center gap-2"
            >
              Type of Event
              <input
                type="text"
                id="eventType"
                name="eventType"
                value={state.eventType}
                onChange={handleChange}
                className="grow italic"
                required
              />
            </label>
          </div>

          {/* Guest Speakers Input */}
          <div className="mb-4">
            <label
              htmlFor="guestSpeakers"
              className="input input-bordered flex items-center gap-2"
            >
              Guest Speakers
              <input
                type="text"
                id="guestSpeakers"
                name="guestSpeakers"
                value={state.guestSpeakers}
                onChange={handleChange}
                className="grow italic"
                required
              />
            </label>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="mt-4 btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
