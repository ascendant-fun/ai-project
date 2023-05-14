interface CopyIconProps {
    width?: number;
    height?: number;
    extraClasses?: string;
}

function CopyIcon({ width = 18, height = 18, extraClasses }: CopyIconProps) {
    if (extraClasses === undefined || extraClasses.length === 0) {
        extraClasses = 'fill-black';
    }

    return (
        <svg width={width} height={height} className={`${extraClasses}`} viewBox="0 0 18 18" fill="current" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.35537 0C5.47753 0 4.70966 0.512556 4.3346 1.25136C4.09975 1.64731 4.23783 2.15854 4.63982 2.38286C5.03363 2.60258 5.53114 2.46283 5.75205 2.06962C5.82799 1.80912 6.06079 1.63409 6.35527 1.63409H15.7348C16.097 1.63409 16.3629 1.89996 16.3629 2.26217V11.6458C16.3629 11.9295 16.1993 12.1522 15.9545 12.2363C15.5614 12.4572 15.4216 12.9555 15.6413 13.3495C15.8656 13.7515 16.3768 13.8896 16.7727 13.6547C17.4988 13.2759 18 12.5137 18 11.6459V2.2623C18 1.02181 16.9752 0.00014733 15.7348 0.00014733L6.35537 0ZM2.26524 4.09292C1.02485 4.09292 0 5.11382 0 6.35425V15.7378C0 16.9783 1.02478 18 2.26524 18H11.6448C12.8852 18 13.91 16.9783 13.91 15.7378V6.35425C13.91 5.11376 12.8853 4.09292 11.6448 4.09292H2.26524ZM2.26524 5.72624H11.6448C12.007 5.72624 12.2728 5.99211 12.2728 6.35432V15.7379C12.2728 16.1001 12.007 16.3668 11.6448 16.3668H2.26524C1.90306 16.3668 1.63721 16.1001 1.63721 15.7379V6.35432C1.63721 5.99211 1.90306 5.72624 2.26524 5.72624Z" />
        </svg>
    )
}

export default CopyIcon;