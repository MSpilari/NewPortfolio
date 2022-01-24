const carouselScroll = (element: HTMLDivElement | null, direction: string) => {
	if (element) {
		return direction === 'left'
			? (element.scrollLeft -= 200)
			: (element.scrollLeft += 200)
	}
}

export { carouselScroll }
