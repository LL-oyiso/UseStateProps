import React from 'react'

function Card({username = " Loyiso " , post = " Front end dev "}){
   
    return(<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512" />
    <div className="pt-6 md:p-8 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Tailwind CSS is the only framework that I have seen scale
          on large teams. It is easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
         {username}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
       {post}
        </div>
      </figcaption>
    </div>
  </figure>)

}

export default Card