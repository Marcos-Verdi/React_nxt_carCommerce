'use client';

import { Combobox,Transition } from '@/node_modules/@headlessui/react/dist/index'
import { ManufacturerProps } from '@/types/index'
import React, { Fragment, useState } from 'react'
import Image from '@/node_modules/next/image'
import { manufacturers } from '@/constants/index';

export default function SearchManufacturer({manufacturer, setManufacturer}: ManufacturerProps) {

    const [query,setQuery] = useState('');

    const filteredManufacturers = 
        query === "" ? 
        manufacturers : 
        manufacturers.filter(item => (item.toLowerCase().replace(/\s+/g,"")).includes(query.toLowerCase().replace(/\s+/g,"")))

  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                    <Image
                        src='/car-logo.svg'
                        alt='Logo of Car'
                        height={20}
                        width={20}
                        className='m1-4' />
                </Combobox.Button>
                <Combobox.Input
                    placeholder='Volkswagen'
                    className='search-manufacturer__input'
                    displayValue={(manufacturer: string) => manufacturer}
                    onChange={e => setQuery(e.target.value)} />
                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery('')}>
                        <Combobox.Options>
                            {filteredManufacturers.length === 0 && query !== ""
                            ? <Combobox.Option
                                value={query}
                                className='search-manufacturer__option'>
                                Create {query}
                            </Combobox.Option>
                            : filteredManufacturers.map(item => (
                                <Combobox.Option
                                    key={item}
                                    className={({ active }) =>
                                    `relative search-manufacturer__option ${active? `bg-primary-blue text-white`: `text-gray-900`}`}
                                    value={item}>
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                }`}
                                                >
                                                {item}
                                                </span>
                                                {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                    active ? 'text-white' : 'text-teal-600'
                                                    }`}
                                                >
                                                </span>
                                                ) : null}
                                            </>
                                            )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}
