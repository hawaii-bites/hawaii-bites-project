import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";

interface UserProfile {
  name: string;
  email: string;
  likes: string[];
  dislikes: string[];
  profilePicture: string | null;
}

const availableFoods = [
  "Classic Dog",
  "Falafel",
  "Chicken Katsu",
  "Orange Chicken",
  "Loco Moco",
  "Teriyaki Chicken",
  "Vegetarian Sushi",
  "Thai Curry",
  "Acai Bowl",
];

const availableDislikes = [
  "Spicy",
  "Seafood",
  "Pork",
  "Beef",
  "Sugar",
  "Gluten",
  "Lactose",
];

const UserProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile>({
<<<<<<< HEAD
    name: "John Doe",
    email: "john.doe@example.com",
    likes: ["Vegetarian Sushi", "Chicken Katsu"],
    dislikes: ["Spicy", "Seafood"],
    profilePicture: null,
  });

  const [newLike, setNewLike] = useState<string>("");
  const [newDislike, setNewDislike] = useState<string>("");
  const [pendingLikes, setPendingLikes] = useState<string[]>([...user.likes]);
  const [pendingDislikes, setPendingDislikes] = useState<string[]>([...user.dislikes]);
=======
    name: 'John Doe',
    email: 'john.doe@example.com',
    likes: ['Chinese', 'Vegetarian'],
    dislikes: ['Spicy', 'Seafood'],
    profilePicture: null, // Placeholder for profile picture
  });

  const [newLike, setNewLike] = useState<string>('');
  const [newDislike, setNewDislike] = useState<string>('');
>>>>>>> parent of 1144ed1 (Adding Submit Button)

  // Profile picture upload handler
  const handleProfilePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profilePicture: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle adding and removing likes and dislikes
  const handleAddLike = () => {
<<<<<<< HEAD
    if (newLike && !pendingLikes.includes(newLike) && availableFoods.includes(newLike)) {
      setPendingLikes((prevLikes) => [...prevLikes, newLike]);
      setNewLike("");
    } else {
      alert("Please select a valid food item from the available list.");
=======
    if (newLike && !user.likes.includes(newLike)) {
      setUser((prevUser) => ({ ...prevUser, likes: [...prevUser.likes, newLike] }));
      setNewLike('');
>>>>>>> parent of 1144ed1 (Adding Submit Button)
    }
  };

  const handleAddDislike = () => {
<<<<<<< HEAD
    if (newDislike && !pendingDislikes.includes(newDislike) && availableDislikes.includes(newDislike)) {
      setPendingDislikes((prevDislikes) => [...prevDislikes, newDislike]);
      setNewDislike("");
    } else {
      alert("Please select a valid dislike from the available list.");
=======
    if (newDislike && !user.dislikes.includes(newDislike)) {
      setUser((prevUser) => ({ ...prevUser, dislikes: [...prevUser.dislikes, newDislike] }));
      setNewDislike('');
>>>>>>> parent of 1144ed1 (Adding Submit Button)
    }
  };

  const handleRemoveLike = (like: string) => {
    setUser((prevUser) => ({ ...prevUser, likes: prevUser.likes.filter((item) => item !== like) }));
  };

  const handleRemoveDislike = (dislike: string) => {
<<<<<<< HEAD
    setPendingDislikes((prevDislikes) => prevDislikes.filter((item) => item !== dislike));
  };

  // Submit pending changes
  const handleSubmitChanges = () => {
    setUser((prevUser) => ({
      ...prevUser,
      likes: pendingLikes,
      dislikes: pendingDislikes,
    }));
    alert("Your changes have been saved!");
=======
    setUser((prevUser) => ({ ...prevUser, dislikes: prevUser.dislikes.filter((item) => item !== dislike) }));
>>>>>>> parent of 1144ed1 (Adding Submit Button)
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="container mx-auto p-5 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-8">
          Set Your Food Preferences
        </h1>

        {/* Profile Picture and Account Information Section */}
        <section className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 mb-4 relative">
            <Image
              src={user.profilePicture || "/placeholder.png"} // Default placeholder if no picture
              alt="Profile Picture"
              className="rounded-full object-cover border-4 border-green-700 shadow-lg"
              width={128}
              height={128}
            />
            <label className="absolute bottom-0 right-0 bg-green-700 text-white p-2 rounded-full cursor-pointer">
              <input type="file" accept="image/*" className="hidden" onChange={handleProfilePictureUpload} />
              Upload
            </label>
          </div>

          {/* Account Info */}
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-800">{user.name}</p>
            <p className="text-lg text-gray-600">{user.email}</p>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800">
              Edit Account Info
            </button>
          </div>
        </section>

        {/* Likes and Dislikes Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card bg-gray-50 p-5 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Foods You Like</h2>
            <ul className="space-y-2 mb-3">
<<<<<<< HEAD
              {pendingLikes.map((like, index) => (
                <li key={index} className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                  <span className="text-lg text-gray-800 font-medium">{like}</span>
                  <button className="text-red-700 hover:underline" onClick={() => handleRemoveLike(like)}>
=======
              {user.likes.map((like, index) => (
                <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                  {like}
                  <button className="text-red-600" onClick={() => handleRemoveLike(like)}>
>>>>>>> parent of 1144ed1 (Adding Submit Button)
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex">
              <input
                type="text"
                className="flex-grow p-3 border border-gray-300 rounded-l-lg"
                placeholder="Add a food you like"
                value={newLike}
                onChange={(e) => setNewLike(e.target.value)}
                list="available-foods"
              />
              <datalist id="available-foods">
                {availableFoods.map((food, index) => (
                  <option key={index} value={food} />
                ))}
              </datalist>
              <button className="px-5 py-3 bg-green-600 text-white rounded-r-lg hover:bg-green-800" onClick={handleAddLike}>
                Add
              </button>
            </div>
          </div>

          <div className="card bg-gray-50 p-5 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Foods You Don’t Like</h2>
            <ul className="space-y-2 mb-3">
<<<<<<< HEAD
              {pendingDislikes.map((dislike, index) => (
                <li key={index} className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                  <span className="text-lg text-gray-800 font-medium">{dislike}</span>
                  <button className="text-red-700 hover:underline" onClick={() => handleRemoveDislike(dislike)}>
=======
              {user.dislikes.map((dislike, index) => (
                <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                  {dislike}
                  <button className="text-red-600" onClick={() => handleRemoveDislike(dislike)}>
>>>>>>> parent of 1144ed1 (Adding Submit Button)
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex">
              <input
                type="text"
                className="flex-grow p-3 border border-gray-300 rounded-l-lg"
                placeholder="Add a food you dislike"
                value={newDislike}
                onChange={(e) => setNewDislike(e.target.value)}
                list="available-dislikes"
              />
              <datalist id="available-dislikes">
                {availableDislikes.map((dislike, index) => (
                  <option key={index} value={dislike} />
                ))}
              </datalist>
              <button className="px-5 py-3 bg-green-600 text-white rounded-r-lg hover:bg-green-800" onClick={handleAddDislike}>
                Add
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        <div className="text-center mt-8">
          <button
            className="px-6 py-3 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-800 shadow-md"
            onClick={handleSubmitChanges}
          >
            Submit Changes
          </button>
        </div>
=======
>>>>>>> parent of 1144ed1 (Adding Submit Button)
      </div>

      <Footer />
    </div>
  );
};

export default UserProfilePage;
