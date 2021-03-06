import fetchGitImage from "./fetchGitImage";

test("Returns a successful GraphQL query on the Github API", () => {
    expect.assertions(1);
    return fetchGitImage("developess").then(res =>
        expect(res.data.user.name).toEqual("Jessie Beech")
    );
});
