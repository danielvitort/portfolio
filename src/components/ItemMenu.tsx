type Props = {
    name: string
}

export const ItemMenu = ({ name }: Props) => {
    return (
        <button>
            <span className="text-secondary font-bold">{name}</span>
        </button>
    )
}