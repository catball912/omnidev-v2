import urllib.request
import json
import time

queries = [
    "AI coding agent",
    "autonomous software engineer",
    "AI programmer",
    "AI developer tool",
    "LLM coding assistant"
]

all_repos = {}

print("Searching GitHub for top AI coding agents...")

for query in queries:
    url = f"https://api.github.com/search/repositories?q={urllib.parse.quote(query)}+stars:>500&sort=stars&order=desc&per_page=30"
    
    req = urllib.request.Request(url)
    req.add_header('User-Agent', 'Mozilla/5.0')
    req.add_header('Accept', 'application/vnd.github.v3+json')
    
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            for item in data.get('items', []):
                repo_name = item['full_name']
                if repo_name not in all_repos:
                    all_repos[repo_name] = {
                        'name': item['name'],
                        'url': item['html_url'],
                        'stars': item['stargazers_count'],
                        'description': item['description'] or '',
                        'language': item['language']
                    }
        time.sleep(2) # rate limit
    except Exception as e:
        print(f"Error querying {query}: {e}")

# Sort by stars
sorted_repos = sorted(all_repos.values(), key=lambda x: x['stars'], reverse=True)

with open('github_ai_agents.md', 'w') as f:
    f.write("# Top AI Coding Agents on GitHub\n\n")
    f.write("| Name | Stars | Language | Description | URL |\n")
    f.write("| --- | --- | --- | --- | --- |\n")
    for r in sorted_repos[:100]: # Top 100
        desc = r['description'].replace('\n', ' ').replace('|', '-')
        f.write(f"| {r['name']} | {r['stars']} | {r['language']} | {desc} | {r['url']} |\n")

print(f"Found {len(sorted_repos)} unique repositories. Results saved to github_ai_agents.md")
