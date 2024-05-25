export default function FormField({id, labelName, placeholder, type, setFunc}: {id?: string, labelName: string, placeholder: string, type: string, setFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
    return (
        <div className="flex flex-col gap-1 w-full flex-1">
            <label htmlFor={labelName} className="text-sm font-500">{labelName}</label>
            <input id={id} type={type} className="rounded w-full bg-[rgba(255,206,213,0.3)] placeholder-red-400 text-red-600 font-[500] outline-none px-4 py-2" placeholder={placeholder} onChange={setFunc}/>
        </div>
    )
}