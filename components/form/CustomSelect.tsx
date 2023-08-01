/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";

type CustomSelectType = {
  selected: any;
  setSelected: any;
  data: any;
};

export default function CustomSelect({
  selected,
  setSelected,
  data,
}: CustomSelectType) {
  return (
    <div className="-mt-1">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-base font-Inter font-normal leading-6 text-secondary-800 pb-1">
              Select Friend from your Connections
            </Listbox.Label>
            <div className="relative ">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-neutral-white py-3 pl-3 pr-10 text-left text-secondary-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:border-primary-200 focus:ring-primary-200 focus:shadow-primary-sm sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <img
                    src={selected.avatar}
                    alt=""
                    className="h-8 w-8 flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate text-base">
                    {selected.name}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-neutral-white py-1 text-base shadow-lg ring-1 ring-neutral-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {data.map((person: any) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active
                            ? "bg-primary-400 text-neutral-white"
                            : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <img
                              src={person.avatar}
                              alt="user avatar"
                              className="h-8 w-8 flex-shrink-0 rounded-full"
                            />
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal ",
                                "ml-3 block truncate"
                              )}
                            >
                              {person.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active
                                  ? "text-neutral-white"
                                  : "text-primary-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
