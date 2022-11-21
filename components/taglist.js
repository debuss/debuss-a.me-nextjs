export default ({ tags }) => {
    return <>
        <div className="mb-4">
            {tags?.data?.map((tag, key) =>
                <span key={key} className="text-xs font-semibold px-3 bg-blue-200 text-blue-800 rounded-full inline-block mr-2">
                    {tag?.attributes?.name}
                </span>
            )}
        </div>
    </>;
};