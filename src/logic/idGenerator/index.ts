// Clojure that returns a new id on each call
export default (() => {
    let runningId: number = 0;

    return (): number => {
        runningId += 1;
        return runningId;
    };
})();
