"use client";

import { CarProps } from '@/types/index';
import React from 'react';
import { Dialog, Transition } from '@/node_modules/@headlessui/react/dist/index';
import { Fragment } from 'react';
import Image from '@/node_modules/next/image';

interface CarDetailProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

export default function CarDetails({isOpen,closeModal,car}: CarDetailProps) {
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-out duration-300'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale 95'>
                    <div className='fixed inset-0 bg-black bg-opacity-25'/>
                </Transition.Child>
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-out duration-300'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale 95'>
                            <Dialog.Panel>
                                <button type="button" onClick={closeModal}>
                                    <Image 
                                        src='/close.svg'
                                        alt='close'
                                        width={20}
                                        height={20}
                                        className='object-contain' />
                                </button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}
