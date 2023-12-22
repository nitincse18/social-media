export const YEARS = ["1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010"]

export const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  export const POSTS = [
    {
      "id": 1,
      "title": "Introduction to JSON",
      "content": "JSON (JavaScript Object Notation) is a lightweight data-interchange format...",
      "userImage": "https://avatars.githubusercontent.com/u/38283863?v=4",
      "userName": "John Doe",
      "publishedDate": "2023-01-01T12:30:00Z",
      "contentType": "text",
      "mediaUrl": null,
      "reactions": {
        "comments": [
          {
            "userId": 101,
            "userName": "Alice",
            "comment": "Great introduction! Thanks for sharing."
          },
          {
            "userId": 102,
            "userName": "Bob",
            "comment": "I found this very helpful. Good job!"
          }
        ]
      }
    },
    {
      "id": 2,
      "title": "Building RESTful APIs",
      "content": "RESTful APIs provide a standardized way to interact with web services...",
      "userImage": "https://avatars.githubusercontent.com/u/38283863?v=4",
      "userName": "Jane Smith",
      "publishedDate": "2023-01-02T14:45:00Z",
      "contentType": "text",
      "mediaUrl": null,
      "reactions": {
        "comments": [
          {
            "userId": 201,
            "userName": "Charlie",
            "comment": "I'm struggling with API authentication. Any tips?"
          },
          {
            "userId": 202,
            "userName": "David",
            "comment": "Check out the documentation for authentication details."
          }
        ]
      }
    },
    {
      "id": 3,
      "title": "Getting Started with React",
      "content": "React is a JavaScript library for building user interfaces...",
      "userImage": "https://avatars.githubusercontent.com/u/38283863?v=4",
      "userName": "Bob Johnson",
      "publishedDate": "2023-01-03T10:15:00Z",
      "contentType": "video",
      "mediaUrl": "https://www.youtube.com/watch?v=WVGChZZfvbQ",
      "reactions": {
        "comments": [
          {
            "userId": 301,
            "userName": "Eve",
            "comment": "I love React! Any recommendations for advanced tutorials?"
          },
          {
            "userId": 302,
            "userName": "Frank",
            "comment": "Try the official React documentation for advanced topics."
          }
        ]
      }
    },
    {
      "id": 4,
      "title": "Python Data Analysis with Pandas",
      "content": "Pandas is a powerful library for data manipulation and analysis in Python...",
      "userImage": "https://avatars.githubusercontent.com/u/38283863?v=4",
      "userName": "Alice Williams",
      "publishedDate": "2023-01-04T08:00:00Z",
      "contentType": "image",
      "mediaUrl": "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
      "reactions": {
        "comments": [
          {
            "userId": 401,
            "userName": "Grace",
            "comment": "How does Pandas compare to other data analysis tools?"
          },
          {
            "userId": 402,
            "userName": "Harry",
            "comment": "Each tool has its strengths. It depends on your specific needs."
          }
        ]
      }
    }
  ]
  