import { useState } from "react";
import { Button, Input } from "@headlessui/react";
import { UserImage } from "../components/user-image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../types/schemas.ts";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavLink } from "react-router-dom";

type UserSchema = z.infer<typeof userSchema>;

export function ProfileCustomization() {
  const [selectedAvatar, setSelectedAvatar] = useState<string>("");
  const [currentAvatar, setCurrentAvatar] = useState<string>(
    "https://devhausleipzig.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjulian.b86ca7f2.jpg&w=3840&q=75"
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserSchema) => {
    console.log("Form submitted with data:", data);
    // Handle form submission
  };

  const avatarOptions = [
    "./src/img/avatar1.svg",
    "./src/img/avatar2.svg",
    "./src/img/avatar3.svg",
    "./src/img/avatar4.svg",
    "./src/img/avatar5.svg",
  ];

  return (
    <div className="bg-gray-900 h-full text-white flex flex-col">
      <header className="p-4 flex justify-between items-center ml-4 mr-1 mt-5">
        <NavLink to="/">
          <svg
            className="h-6 w-6"
            viewBox="0 0 16 16"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.14671 8.35335C5.05308 8.2596 5.00049 8.13252 5.00049 8.00002C5.00049 7.86752 5.05308 7.74044 5.14671 7.64669L10.1467 2.64669C10.1925 2.59756 10.2477 2.55816 10.309 2.53083C10.3704 2.50351 10.4366 2.48881 10.5037 2.48763C10.5708 2.48644 10.6375 2.49879 10.6998 2.52394C10.762 2.54909 10.8186 2.58652 10.8661 2.634C10.9136 2.68147 10.951 2.73803 10.9761 2.80029C11.0013 2.86255 11.0136 2.92923 11.0124 2.99637C11.0113 3.0635 10.9966 3.12971 10.9692 3.19105C10.9419 3.25238 10.9025 3.30758 10.8534 3.35335L6.20672 8.00002L10.8534 12.6467C10.9025 12.6925 10.9419 12.7477 10.9692 12.809C10.9966 12.8703 11.0113 12.9365 11.0124 13.0037C11.0136 13.0708 11.0013 13.1375 10.9761 13.1998C10.951 13.262 10.9136 13.3186 10.8661 13.366C10.8186 13.4135 10.762 13.451 10.6998 13.4761C10.6375 13.5013 10.5708 13.5136 10.5037 13.5124C10.4366 13.5112 10.3704 13.4965 10.309 13.4692C10.2477 13.4419 10.1925 13.4025 10.1467 13.3534L5.14671 8.35335Z" />
          </svg>
        </NavLink>

        <Menu as="div" className="relative">
          <MenuButton as="div">
            <UserImage userName={"Herr Vogel"} userImage={currentAvatar} />
          </MenuButton>
          <MenuItems className="absolute right-1 mt-2 w-72 origin-top-right bg-dark divide-y divide-white-dimmed-heavy rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex gap-2 p-2">
              {avatarOptions.map((avatar, index) => (
                <MenuItem key={index} as="div">
                  {({ active }) => (
                    <img
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      className={`cursor-pointer ${
                        active ? "ring-2  gap-1 ring-yellow rounded-full" : ""
                      }`}
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        setSelectedAvatar(avatar);
                      }}
                    />
                  )}
                </MenuItem>
              ))}
            </div>
            <MenuItem>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-dark-light" : ""
                  } group flex w-full items-center px-4 py-2 text-sm text-white`}
                  onClick={() => setCurrentAvatar(selectedAvatar)}
                >
                  Save
                </button>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      </header>

      <main className="flex-1 p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Profile Customization</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              className="w-full bg-dark-light text-white p-3 rounded"
              type="text"
              placeholder="Enter your first name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-rose-600">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <Input
              className="w-full bg-dark-light text-white p-3 rounded"
              type="text"
              placeholder="Enter your last name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-rose-600">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <Input
              className="w-full bg-dark-light text-white p-3 rounded"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-rose-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Input
              className="w-full bg-dark-light text-white p-3 rounded"
              type="password"
              placeholder="Change your Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-rose-600">{errors.password.message}</p>
            )}
          </div>

          <div>
            <Input
              className="w-full bg-dark-light text-white p-3 rounded"
              type="password"
              placeholder="Confirm your Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-rose-600 bg-dark">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="text-dark-light bg-yellow mt-auto mb-4 rounded-md pt-2 pb-2 text-center">
            <Button type="submit" disabled={isSubmitting}>
              Save Data
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
