"use client"

import { Card, CardBody, CardFooter, Image, User } from "@heroui/react"

import React from "react"

type Props = {
   id: number
   coverImage: string
   category: string
   date: string
   title: string
   user: {
      name: string
      avatar?: string
   }
}

const LatestNewsCard: React.FC<Props> = (props) => {
   return (
      <Card isPressable shadow="none" onPress={() => console.log("press")} className="text-primary">
         <CardBody className="overflow-visible p-0 space-y-4">
            <Image
               alt={props.title}
               className="w-full object-cover h-[300px] rounded-xl"
               shadow="none"
               src={props.coverImage}
               width="100%"
            />

            <div className="flex items-center gap-4">
               <p className="font-bold">{props.category}</p>
               <p className="text-paragraph">{props.date}</p>
            </div>

            <h3 className="text-xl">{props.title}</h3>
         </CardBody>

         <CardFooter className="text-small justify-between px-0 pt-5">
            <User
               avatarProps={{
                  src: props.user.avatar,
                  size: "sm",
               }}
               name={props.user.name}
               classNames={{ name: "text-base" }}
            />
         </CardFooter>
      </Card>
   )
}

export default LatestNewsCard
