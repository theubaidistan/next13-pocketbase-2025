// "use client";

// // export default function Test() {
// //   return (
// //     <div>
// //       <h1>Create Note</h1>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function CreateNote() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const router = useRouter();

//   const create = async () => {
//     // const db = new PocketBase('http://127.0.0.1:8090');

//     // await db.records.create('notes', {
//     //   title,
//     //   content,
//     // });

//     await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title,
//         content,
//       }),
//     });

//     setContent("");
//     setTitle("");

//     router.refresh();
//   };

//   return (
//     <form onSubmit={create}>
//       <h3>Create a new Note</h3>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         placeholder="Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       <button type="submit">Create note</button>
//     </form>
//   );
// }
//*-----------------------------------------------------------------------------------------------------
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");

    router.refresh(); // Refresh Server Component
  };

  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Create Note</button>
    </form>
  );
}
