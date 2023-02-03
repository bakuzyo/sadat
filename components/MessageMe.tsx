import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    objet: string,
    message: string,
};

function MessageMe() {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:isabelle.sadat@wanadoo.fr?subject=${formData.objet}&
        body=Bonjour, je suis ${formData.name}. ${formData.message} (${formData.email})`;
    };

    return (
        <div className='h-screen flex relative flex-col text-center text-left flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='invisible md:visible absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='md:text-4xl font-semibold text-center'>
                    Contactez-moi pour prendre rendez vous.{" "}
                    <span className='decoration-[#F7AB0A]/50 underline'>Discutons.</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>
                            01 42 09 29 55
                        </p>
                    </div>

                    <div className='flex items-center space-x-5'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>
                            isabelle.sadat@wanadoo.fr
                        </p>
                    </div>

                    <div className='flex items-center space-x-5'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='md:text-2xl'>
                            25 Rue Philippe de Girard, 75010 à Paris
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                        <div className='flex space-x-2 md:max-w-[500px] max-w-[50px]'>
                            <input
                                {...register('name')}
                                placeholder="Nom"
                                className='contactInput'
                                type="text"
                            />
                            <input
                                {...register('email')}
                                placeholder="Email"
                                className='contactInput md:visible invisible'
                                type="email"
                            />
                        </div>

                        <input
                            {...register('objet')}
                            placeholder="Objet"
                            className='contactInput'
                            type="text"
                        />

                        <textarea
                            {...register('message')}
                            placeholder="Message"
                            className='contactInput'
                        />
                        <button
                            type="submit"
                            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold
                             text-lg'>
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MessageMe