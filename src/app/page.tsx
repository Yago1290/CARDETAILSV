import Link from 'next/link' 
import Image from 'next/image'
import { 
  Button
} from '@/components/ui/button'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Car,
  CarFront,
  WalletCards,
  Wand2,
  KeyRound,
  Minus
} from 'lucide-react'
import PhotoAboutUs from './../../public/photo-about-us.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import logo from './../../public/icon.png'
import photoBMW1 from './../../public/foto1.jpg'
import photoBMW2 from './../../public/foto2.jpg'
import Head from 'next/head'

import type { Metadata } from 'next'
export const metadata: Metadata = {
  icons: {
    icon: './favicon.ico'
  }
}

export default function Home() {

  
  
  return (
    

        <div className='h-[400vh] max-h-[700vh] xl:h-[700vh] scroll-smooth max-lg:h-[700vh] max-sm:w-full sm:h-[700vh] overflow-x-hidden bg-black'>
          
         
            

                <div className='h-screen '>


                    <div >
                     <Link href="/"> <Image src={logo} alt="Logo" className='size-48 bg-transparent ml-16 '/></Link>
                     
                    </div>
              
        

                  <main className='flex items-center justify-between text-zinc-100 h-[44.5%] xl:h-[30.5%] 2xl:h-[44.5%] rounded-sm mt-40'>
                    <section className='max-md:flex max-md:flex-col max-md:items-center max-md:justify-center'>
                      <strong><h1 className='text-7xl ml-10 xl:w-[10rem] xl:mt-20 max-sm:text-6xl max-sm:mr-10'>O tratamento que <span className='text-[#F3C969] font-sans'>seu carro<br/>merece!</span></h1></strong>
                      <strong><h2 className='text-2xl ml-10 mt-8 max-sm:ml-0 max-sm:mr-0'>Venha fazer o seu tratamento<span className='text-[#F3C969] font-sans'><br/> automotivo, Agende-já!</span></h2></strong>
                      
                      <Button variant="secondary" className='ml-10 mt-14 w-[20rem] h-[3rem] max-sm:ml-0'>Saiba Mais</Button>
                    </section>
                    <article>
                      <Image src="https://bebeimportadosmiami.com/wp-content/uploads/2018/03/Sof%C3%A1-Cama-para-Meninos-do-Cars-infantil-Disney-Pixar-Disney-Pixar-Cars-2.jpg" alt="" className='rounded-lg size-[35rem] mr-28 max-sm:hidden max-md:hidden md:hidden lg:block '/>
                    </article>
                  </main>

                
              </div>

            
            

                <div className='flex flex-row justify-center items-center 2xl:mt-0 gap-48 lg:flex-row max-sm:flex-col lg:mt-96 max-sm:gap-10 max-md:flex-col max-md:gap-10 max-sm:mt-80 md:flex-col md:gap-10 md:mt-80 min-[320px]:mt-80 xl:mt-96 '>

                    <div className='flex items-center justify-center'>
                      <Card className='w-[17rem] h-[20rem] flex flex-col items-center justify-around bg-black text-zinc-100 max-sm:w-[15rem] max-sm:h-[17]'>
                        <CardHeader>
                          <CardTitle>Melhor qualidade de serviços!</CardTitle>
                          <CardDescription>Desde a lavagem mais simples à mais avançada</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Wand2 className='size-28'/>
                        </CardContent>
                      </Card>
                    </div>

              

                  <div className='flex items-center justify-center'>
                    <Card className='w-[17rem] h-[20rem] flex flex-col items-center justify-around bg-black text-zinc-100 max-sm:w-[15rem] max-sm:h-[17]'>
                      <CardHeader>
                        <CardTitle>O Melhor Custo-Benefício </CardTitle>
                        <CardDescription>Com os melhores preços e entregando o máximo possível!</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <WalletCards className='size-28'/>
                      </CardContent>
                    </Card>
                  </div>

                  <div className='flex items-center justify-center'>
                    <Card className='w-[17rem] h-[20rem] flex flex-col items-center justify-around bg-black text-zinc-100 max-sm:w-[15rem] max-sm:h-[17]'>
                      <CardHeader>
                        <CardTitle>Com a maior segurança com seu carro</CardTitle>
                        <CardDescription>Levamos a segurança do seu carro a sério!</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <KeyRound className='size-28'/>
                      </CardContent>
                    </Card>
                  </div>
        
      
              </div>

    

              <div className='flex items-center justify-between mt-28 ml-40 xl:gap-48 2xl:gap-0 mr-44 max-sm:flex-col-reverse max-md:flex-col-reverse md:flex-col-reverse md:mt-28 xl:flex-row lg:flex-row lg:gap-40' >

                  <Carousel className='w-full max-sm:w-72 max-sm:mt-20 max-md:w-96 max-md:mt-20 max-sm:ml-4 md:mt-20 '>
                    <CarouselContent>
                    <CarouselItem>
                      <video loop autoPlay muted playsInline className='w-[24rem] rounded-lg border-2 '>
                        <source src={'video/video.mp4'}/>
                        Your browser does not support the video tag.
                      </video>
                      </CarouselItem>
                      <CarouselItem>
                      <video loop autoPlay muted playsInline className='w-[24rem] rounded-lg border-2'>
                        <source src={'video/video-shorts.mp4'}/>
                        Your browser does not support the video tag.
                      </video>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                    
                  </Carousel>

                <strong><h1 className='text-7xl gap-4 max-md:ml-16 text-zinc-50 max-sm:mr-20 max-sm:text-6xl'>O seu carro sendo <br />tratado<span className='text-[#F3C969] font-sans'> da melhor forma</span></h1></strong>
              </div>


              <div className='flex items-center justify-center flex-col xl:space-x-16 mt-28 '>
                <strong><h1 className='text-7xl gap-4 text-zinc-50 max-sm:text-6xl max-sm:mr-6'>Sobre-Nós</h1></strong>

                  <div className='flex items-center justify-between ml-40 mt-72 mr-72 max-h-28 w-auto xl:gap-40 2xl:gap-28 max-sm:flex-col max-sm:w-[24rem] md:mt-20 md:ml-80 xl:flex-row xl:mt-80 md:flex-col max-sm:mr-32 max-sm:mt-32 max-sm:space-y-16 max-md:flex-col max-md:w-[24rem] max-md:mr-32 max-md:mt-32 max-md:space-y-16'>
                    <strong><h2 className='text-xl text-zinc-50 ml-10 mr-10 max-sm:ml-0 max-sm:mr-10 max-sm:w-80 max-md:ml-3 max-md:mr-0 max-md:w-80 min-[320px]:w-[20rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nobis, aspernatur minima magni suscipit ducimus voluptates quas placeat architecto alias repudiandae similique vitae nesciunt repellendus, sunt et? Illo, ipsum in. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, nostrum dolor minus similique iste corporis dolorem animi. Ipsam consequuntur et quod porro iure quas vel veniam, maxime quibusdam quis qui!</h2></strong>
                    <Image src={PhotoAboutUs} alt='About Us Photo' className='w-[26rem] border-[1px] mr-24 max-sm:mr-8 max-md:mr-6 max-sm:w-[24] min-[320px]:w-[23rem] mb-48 md:mt-20 md:ml-20 xl:w-[26rem]'/>
                  </div>

              </div>
              <div>
                
              </div>
          </div>

  );
}
