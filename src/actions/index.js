export function selectBook( book ){
    //select book is an action creator and it needs to return an action
    //and obect with a type property.

    //type and a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}