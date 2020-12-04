CarouselControl.propTypes = {
    direction: PropTypes.oneOf(['prev', 'next']).isRequired,
    onClickHandler: PropTypes.func.isRequired,
    cssModule: PropTypes.object,
    directionText: PropTypes.string
};