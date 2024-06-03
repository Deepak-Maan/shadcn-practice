import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
export const myArr = [
    {
        heading: "accordion-1",
        para: "Accordion 1 paragraph"
    },
    {
        heading: "accordion-2",
        para: "Accordion 2 paragraph"
    },
    {
        heading: "accordion-3",
        para: "Accordion 3 paragraph"
    },
    {
        heading: "accordion-4",
        para: "Accordion 4 paragraph"
    },
]

const ShadeDemo = () => {
    return (
        <div className="container mt-10">
            <h1 className="text-center text-5xl font-bold pb-5">SHADCN Practice </h1>
            <Accordion type="single" collapsible>
                {myArr.map((item, index) => (
                    <AccordionItem className='ps-2' key={index} value={`item-${index + 2}`}>
                        <AccordionTrigger>{item.heading}</AccordionTrigger>
                        <AccordionContent>
                            {item.para}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

        </div>
    )
}

export default ShadeDemo
