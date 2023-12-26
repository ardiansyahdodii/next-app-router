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
                {params.slug ? "Detail Product Page" : "Product Page"}
            </h1>
            <div>
                {params.slug && (<>
                    <p>id Product : {params.slug[0]}</p>
                    <p>jenis Product : {params.slug[1]}</p>
                </>)
                }
            </div>
        </main>
    )
}

export default DetailProductPage