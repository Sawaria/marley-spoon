# Recipes Server
It provides REST apis for Marley spoon recipes list from Contentful API.

## Prerequisites
* ruby 2.6.6 (user `rvm` to switch/install different ruby version)

## Getting Started
### Running Locally
```
1. bundle install
2. rails s
```

## API details
#### Recipe List
1. Request
```
curl --request GET 'localhost:4000/api/v1/recipes'
```
2. Response
```
[
    {
        "id": "4dT8tcb6ukGSIg2YyuGEOm",
        "title": "White Cheddar Grilled Cheese with Cherry Preserves & Basil",
        "photo_url": "//images.ctfassets.net/kk2bw5ojx476/61XHcqOBFYAYCGsKugoMYK/0009ec560684b37f7f7abadd66680179/SKU1240_hero-374f8cece3c71f5fcdc939039e00fb96.jpg",
        "tag_names": [
            "vegan"
        ],
        "description": "*Grilled Cheese 101*: Use delicious cheese and good quality bread; make crunchy on the outside and ooey gooey on the inside; add one or two ingredients for a flavor punch! In this case, cherry preserves serve as a sweet contrast to cheddar cheese, and basil adds a light, refreshing note. Use __mayonnaise__ on the outside of the bread to achieve the ultimate, crispy, golden-brown __grilled cheese__. Cook, relax, and enjoy!",
        "chef_name": null
    },
    {
        "id": "5jy9hcMeEgQ4maKGqIOYW6",
        "title": "Tofu Saag Paneer with Buttery Toasted Pita",
        "photo_url": "//images.ctfassets.net/kk2bw5ojx476/48S44TRZN626y4Wy4CuOmA/9c0a510bc3d18dda9318c6bf49fac327/SKU1498_Hero_154__2_-adb6124909b48c69f869afecb78b6808-2.jpg",
        "tag_names": [],
        "description": "Saag paneer is a popular Indian dish with iron-rich spinach and cubes of paneer, an Indian cheese that is firm enough to retain it's shape, but silky-soft on the inside. We have reimagined Saag Paneer and replaced the \"paneer\" with crispy cubes of firm tofu, making this already delicious and nutritious vegetarian dish burst with protein. Toasted pita bread is served alongside as an ode to naan. Cook, relax, and enjoy! [VIDEO](https://www.youtube.com/watch?v=RMzWWwfWdVs)",
        "chef_name": null
    },
    {
        "id": "2E8bc3VcJmA8OgmQsageas",
        "title": "Grilled Steak & Vegetables with Cilantro-Jalapeño Dressing",
        "photo_url": "//images.ctfassets.net/kk2bw5ojx476/3TJp6aDAcMw6yMiE82Oy0K/2a4cde3c1c7e374166dcce1e900cb3c1/SKU1503_Hero_102__1_-6add52eb4eec83f785974ddeac3316b7.jpg",
        "tag_names": [],
        "description": "Warmer weather means the ushering in of grill season and this recipe completely celebrates the grill (or grill pan)! Squash and green beans are nicely charred then take a bath in a zesty cilantro-jalapeño dressing. After the steaks are perfectly seared, the same dressing does double duty as a tasty finishing sauce. A fresh radish salad tops it all off for crunch and a burst of color. Cook, relax, and enjoy!",
        "chef_name": "Mark Zucchiniberg "
    },
    {
        "id": "437eO3ORCME46i02SeCW46",
        "title": "Crispy Chicken and Rice\twith Peas & Arugula Salad",
        "photo_url": "//images.ctfassets.net/kk2bw5ojx476/5mFyTozvSoyE0Mqseoos86/fb88f4302cfd184492e548cde11a2555/SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg",
        "tag_names": [
            "gluten free",
            "healthy"
        ],
        "description": "Crispy chicken skin, tender meat, and rich, tomatoey sauce form a winning trifecta of delicious in this one-pot braise. We spoon it over rice and peas to soak up every last drop of goodness, and serve a tangy arugula salad alongside for a vibrant boost of flavor and color. Dinner is served! Cook, relax, and enjoy!",
        "chef_name": "Jony Chives"
    }
]
```
#### Recipe Detail
1. Request
```
curl --request GET 'localhost:4000/api/v1/recipes/437eO3ORCME46i02SeCW46'
```
2. Response
```
{
    "id": "437eO3ORCME46i02SeCW46",
    "title": "Crispy Chicken and Rice\twith Peas & Arugula Salad",
    "photo_url": "//images.ctfassets.net/kk2bw5ojx476/5mFyTozvSoyE0Mqseoos86/fb88f4302cfd184492e548cde11a2555/SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg",
    "tag_names": [
        "gluten free",
        "healthy"
    ],
    "description": "Crispy chicken skin, tender meat, and rich, tomatoey sauce form a winning trifecta of delicious in this one-pot braise. We spoon it over rice and peas to soak up every last drop of goodness, and serve a tangy arugula salad alongside for a vibrant boost of flavor and color. Dinner is served! Cook, relax, and enjoy!",
    "chef_name": "Jony Chives"
}
```