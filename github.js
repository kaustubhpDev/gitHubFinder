class Github {
    constructor(){
        this.client_id = 'e88acc4c9f1b69cf663d';
        this.client_secret = 'ea571b2af10f1ff10b91000f98c1bdae0e8a4a1a';
        this.repos_count = 5;
        this.repos_sort = 'created : asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return{
            profile,
            repos
        }

    }
} 