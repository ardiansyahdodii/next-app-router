type DetailProductPageProps = {
    params: {
        slug: string
    }
}
const DetailProductPage = (props: DetailProductPageProps) => {

    const { params } = props
    console.log(params)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>
                Detail Product Page
            </h1>
            <h3>
                id Product : {params.slug}
            </h3>
        </main>
    )
}

export default DetailProductPage