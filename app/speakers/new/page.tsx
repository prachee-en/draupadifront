"use client";
import React, { useState } from "react";

interface FormState {
  name: string;
  city: string;
  emailID: string;
  youtubeLinks: string[];
  bio: string;
  degree: string;
  field: string;
  college: string;
  experience: string;
}

const Form: React.FC = () => {
  const [state, setState] = useState<FormState>({
    name: "",
    city: "",
    emailID: "",
    youtubeLinks: [""],
    bio: "",
    degree: "",
    field: "",
    college: "",
    experience: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;
    if (name === "youtubeLinks" && typeof index === "number") {
      const updatedLinks = [...state.youtubeLinks];
      updatedLinks[index] = value;
      setState({ ...state, youtubeLinks: updatedLinks });
    } else {
      setState({ ...state, [name]: value });
    }
  };
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
  //   const { name, value } = e.target;
  //   console.log('Name:', name);
  //   console.log('Value:', value);
  //   setState(prevState => {
  //     if (name === 'youtubeLinks' && typeof index === 'number') {
  //       const updatedLinks = [...prevState.youtubeLinks];
  //       updatedLinks[index] = value;
  //       console.log('Updated Links:', updatedLinks);
  //       return { ...prevState, youtubeLinks: updatedLinks };
  //     } else {
  //       console.log('Other Field:', name);
  //       return { ...prevState, [name]: value };
  //     }
  //   });
  // };

  const handleAddLink = () => {
    setState({ ...state, youtubeLinks: [...state.youtubeLinks, ""] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="bg-base-300 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Be a Speaker
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

          {/* City Input */}
          <div className="mb-4">
            <label
              htmlFor="city"
              className="input input-bordered flex items-center gap-2"
            >
              City
              <input
              type="text"
              id="city"
              name="city"
              value={state.city}
              onChange={handleChange}
              className="grow italic"
              required
            />
            </label>
          </div>

          {/* emailID Input */}
          <div className="mb-4">
            <label
              htmlFor="emailID"
              className="input input-bordered flex items-center gap-2"
            >
              Email ID
              <input
              type="email"
              id="emailID"
              name="emailID"
              value={state.emailID}
              onChange={handleChange}
              className="grow italic"
              required
            />
            </label>
          </div>

          {/* YouTube Links */}
          {/* <div className="mb-4">
            <label className="block text-lg font-medium text-gray-600">
              YouTube Links
            </label>
            {state.youtubeLinks.map((link, index) => (
              <input
                key={index}
                type="text"
                value={link}
                onChange={(e) => handleChange(e, index)}
                className="mt-1 p-2 w-full border rounded-md focus:border-blue-500"
              />
            ))}
            <button
              type="button"
              onClick={handleAddLink}
              className="mt-2 btn btn-sm btn-secondary"
            >
              Add Link
            </button>
          </div> */}

          {/* Bio */}
          <div className="mb-4">
            <label
              htmlFor="bio"
              className="textarea textarea-bordered flex items-center gap-2"
            >
              Bio
            <textarea
              id="bio"
              name="bio"
              value={state.bio}
              onChange={handleChange}
              className="textarea textarea-bordered grow italic"
              required
            />
            </label>
          </div>

          {/* Degree */}
          <div className="mb-4">
            <label
              htmlFor="degree"
              className="input input-bordered flex items-center gap-2"
            >
              Degree
            <input
              type="text"
              id="degree"
              name="degree"
              value={state.degree}
              onChange={handleChange}
              className="grow italic"
              required
            />
            </label>
          </div>

          {/* Field */}
          <div className="mb-4">
            <label
              htmlFor="field"
              className="input input-bordered flex items-center gap-2"
            >
              Field
            <input
              type="text"
              id="field"
              name="field"
              value={state.field}
              onChange={handleChange}
              className="grow italic"
              required
            />
            </label>
          </div>

          {/* College */}
          <div className="mb-4">
            <label
              htmlFor="college"
              className="input input-bordered flex items-center gap-2"
            >
              College
            <input
              type="text"
              id="college"
              name="college"
              value={state.college}
              onChange={handleChange}
              className="grow italic"
              required
            />
            </label>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <label
              htmlFor="experience"
              className="input input-bordered flex items-center gap-2"
            >
              Experience
            <input
              type="text"
              id="experience"
              name="experience"
              value={state.experience}
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

export default Form;
