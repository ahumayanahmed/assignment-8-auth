import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const PhotoCard = ({photo}) => {
    return (
        

        <Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
            <Image
                src={photo.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={photo.title}
                className="object-cover rounded-xl"
                />

                <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip>
            </div>

            <div>
                <h2 className="font-medium">{photo.title}</h2>
                <p className="font-medium">Price: {photo.price} {photo.currency}</p>
            </div>

           

     <Link href={`/allphotos/${photo.id}`}> <Button variant="outline" className={'w-full'}>View</Button></Link>
            
        </Card>
       
    );
};

export default PhotoCard;