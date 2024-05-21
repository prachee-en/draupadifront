"use client";
import React from "react";

interface EventProps {
  eventName: string;
  organizationName: string;
  organizerProfileLink: string;
  state: string;
  venue: string;
  date: string;
  footfall: number;
  eventType: string;
  guestSpeakers: string[];
  brief: string;
}

const Event: React.FC<EventProps> = ({
  eventName,
  organizationName,
  organizerProfileLink,
  state,
  venue,
  date,
  footfall,
  eventType,
  guestSpeakers,
  brief,
}) => {
  return (
    <div className="bg-base-300 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Event Image */}
        <div className="mb-8">
          <img
            src="/path/to/event-image.jpg"
            alt={eventName}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Event Details */}
        <div className="bg-base-200 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-6">{eventName}</h1>

          {/* Organization */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Organized By:</h2>
            <p className="text-lg">{organizationName}</p>
          </div>

          {/* Organizer Profile Link */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Organizer Profile:</h2>
            <a
              href={organizerProfileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {organizerProfileLink}
            </a>
          </div>

          {/* State */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">State:</h2>
            <p className="text-lg">{state}</p>
          </div>

          {/* Venue */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Venue:</h2>
            <p className="text-lg">{venue}</p>
          </div>

          {/* Date */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Date</h2>
            <p className="text-lg">{date}</p>
          </div>

          {/* Footfall */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Footfall:</h2>
            <p className="text-lg">{footfall}</p>
          </div>

          {/* Type of Event */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Event Type:</h2>
            <p className="text-lg">{eventType}</p>
          </div>

          {/* Guest Speakers */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Guest Speakers:</h2>
            <ul className="list-disc pl-6">
              {guestSpeakers && guestSpeakers.length > 0 ? (
                guestSpeakers.map((speaker, index) => (
                  <li key={index} className="text-lg mb-2">
                    {speaker}
                  </li>
                ))
              ) : (
                <li className="text-lg text-gray-500">
                  No guest speakers announced yet.
                </li>
              )}
            </ul>
          </div>

          {/* Brief */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">About the Event:</h2>
            <p className="text-lg">{brief}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

{
  /* <EventDetails
  eventName="Tech Conference 2024"
  organizationName="Tech Events"
  organizerProfileLink="https://example.com/organizer-profile"
  venue="New York"
  date="2024-05-15"
  footfall="1000"
  eventType="Conference"
  guestSpeakers={["Prachi", "Jane Doe"]}
  eventDescription="Join us for the Tech Conference 2024 where industry experts will discuss the latest trends and innovations."
/> */
}
