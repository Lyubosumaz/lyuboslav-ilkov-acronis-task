export const mockFetchREST = (data) => {
    sessionStorage.setItem(
        'mockWorkoutData',
        JSON.stringify({ 'workout-list': data })
    );
};
