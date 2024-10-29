function stream_append_pickle(xs, ys) {
     return is_null(xs)
            ? ys()
            : pair(head(xs),
                  () => stream_append_pickle(stream_tail(xs),

                                              ys));

}
function integers(n){
    return pair(n, () => integers(n + 1));
}
const int = integers(1);
const int2 = pair(1, () => pair(2, () => pair(3, 
                                       () => pair(4, () => null))));

function stream_pair3(s){
    function streamMaker(a, b){
        return b === a? null : pair(pair(a, b), () => streamMaker(a + 1, b));
    }
    return stream_append_pickle(streamMaker(1, head(s)), () => stream_pair3(stream_tail(s)));
}

const test = map_stream(int, stream_tail(int));
eval_stream(test, 5);

/*function stream_pairs2(s) {
    return is_null(s)
           ? null
           : stream_append_pickle(
                        stream_map(
                            sn => pair(head(s), sn),
                                        stream_tail(s)),
                        () => stream_pairs(stream_tail(s)));
}

function integers(n){
    return pair(n, () => integers(n + 1));
}
const int = integers(1);
const int2 = pair(1, () => pair(2, () => pair(3, 
                                       () => pair(4, () => null))));
eval_stream(stream_pairs(int2), 6); */


