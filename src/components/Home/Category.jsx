import React from 'react'
import CategorySwiper from './components/CategorySwiper'

export default function Category() {
  return (
    <section className='py-20'>
        <div className='container'>
            <div className='flex flex-col items-center justify-center gap-7'>
                <h3 className='flex gap-0.5 font-bold text-3xl text-Primary'>
                    دسته بندی
                    <span className='text-Title'>محصولات</span>
                </h3>
                <CategorySwiper />
            </div>
        </div>
    </section>
  )
}
