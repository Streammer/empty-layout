const defaultLike = '/img/sprite.svg#like';
const activeLike = '/img/sprite.svg#like-active';

export function initEventsLikeDislikeButton() {
    const likeButton = document.querySelector('.article-like-dislike__yes');
    const dislikeButton = document.querySelector('.article-like-dislike__no');

    likeButton.addEventListener('click', () => {
        const useEl = likeButton.querySelector('use');
        if (useEl) {
            toggleIcon(useEl);
        }

        dislikeButton.querySelector('use').setAttribute('xlink:href', defaultLike);
    });

    dislikeButton.addEventListener('click', () => {
        const useEl = dislikeButton.querySelector('use')
        if (useEl) {
            toggleIcon(useEl);
        }

        likeButton.querySelector('use').setAttribute('xlink:href', defaultLike);
    });
}

function toggleIcon(icon) {
    if (icon.getAttribute('xlink:href') === defaultLike) {
        icon.setAttribute('xlink:href', activeLike);
    } else {
        icon.setAttribute('xlink:href', defaultLike);
    }
}