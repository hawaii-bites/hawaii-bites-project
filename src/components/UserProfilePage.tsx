import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Image from 'next/image';

interface UserProfile {
  name: string;
  email: string;
  likes: string[];
  dislikes: string[];
  profilePicture: string | null;
}

const UserProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile>({
<<<<<<< HEAD
<<<<<<< HEAD
    name: "John Doe",
    email: "john.doe@example.com",
    likes: ["Vegetarian Sushi", "Chicken Katsu"],
    dislikes: ["Spicy", "Seafood"],
=======
    name: 'John Doe',
    email: 'john.doe@example.com',
    likes: ['Chinese', 'Vegetarian'],
    dislikes: ['Spicy', 'Seafood'],
>>>>>>> parent of c9cfe4e (Added menu data, implemented dynamic category pages, improved search functionality, updated user profile page, redesigned homepage, and created M2 project board.)
    profilePicture: null,
  });

  const [newLike, setNewLike] = useState<string>('');
  const [newDislike, setNewDislike] = useState<string>('');
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
=======
    if (newLike && !pendingLikes.includes(newLike)) {
      setPendingLikes((prevLikes) => [...prevLikes, newLike]);
      setNewLike('');
>>>>>>> parent of c9cfe4e (Added menu data, implemented dynamic category pages, improved search functionality, updated user profile page, redesigned homepage, and created M2 project board.)
    }
  };

  const handleAddDislike = () => {
<<<<<<< HEAD
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
=======
    if (newDislike && !pendingDislikes.includes(newDislike)) {
      setPendingDislikes((prevDislikes) => [...prevDislikes, newDislike]);
      setNewDislike('');
>>>>>>> parent of c9cfe4e (Added menu data, implemented dynamic category pages, improved search functionality, updated user profile page, redesigned homepage, and created M2 project board.)
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
<<<<<<< HEAD
    alert("Your changes have been saved!");
=======
    setUser((prevUser) => ({ ...prevUser, dislikes: prevUser.dislikes.filter((item) => item !== dislike) }));
>>>>>>> parent of 1144ed1 (Adding Submit Button)
=======
>>>>>>> parent of c9cfe4e (Added menu data, implemented dynamic category pages, improved search functionality, updated user profile page, redesigned homepage, and created M2 project board.)
  };

  return (
    <div className="min-h-screen flex flex-col bg-var(--background)">
      <Navbar />

      <div className="container mx-auto p-5 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-4xl font-bold text-center text-var(--primary-green) mb-8">
          Set Your Food Preferences
        </h1>

        {/* Profile Picture and Account Information Section */}
        <section className="flex flex-col items-center mb-8">
          {/* Profile Picture */}
          <div className="w-32 h-32 mb-4 relative">
            <Image
              src={user.profilePicture || '/placeholder.png'} // Default placeholder if no picture
              alt="Profile Picture"
              className="rounded-full object-cover border-4 border-var(--primary-green)"
              width={128}
              height={128}
            />
            <label className="absolute bottom-0 right-0 bg-var(--primary-green) text-white p-1 rounded-full cursor-pointer">
              <input type="file" accept="image/*" className="hidden" onChange={handleProfilePictureUpload} />
              Upload
            </label>
          </div>

          {/* Account Info */}
          <div className="text-center">
            <p className="text-xl font-semibold">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
            <button className="mt-3 px-4 py-2 bg-var(--secondary-green) text-white rounded-lg hover:bg-var(--primary-green)">
              Edit Account Info
            </button>
          </div>
        </section>

        {/* Likes and Dislikes Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Foods You Like */}
          <div className="card bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-var(--primary-green) mb-4">Foods You Like</h2>
            <ul className="space-y-2 mb-3">
<<<<<<< HEAD
              {pendingLikes.map((like, index) => (
<<<<<<< HEAD
                <li key={index} className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                  <span className="text-lg text-gray-800 font-medium">{like}</span>
                  <button className="text-red-700 hover:underline" onClick={() => handleRemoveLike(like)}>
=======
              {user.likes.map((like, index) => (
                <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                  {like}
                  <button className="text-red-600" onClick={() => handleRemoveLike(like)}>
>>>>>>> parent of 1144ed1 (Adding Submit Button)
=======
                <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                  {like}
                  <button className="text-red-600" onClick={() => handleRemoveLike(like)}>
>>>>>>> parent of c9cfe4e (Added menu data, implemented dynamic category pages, improved search functionality, updated user profile page, redesigned homepage, and created M2 project board.)
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex">
              <input
                type="text"
                className="flex-grow p-2 border border-gray-300 rounded-l-md"
                placeholder="Add a food you like"
                value={newLike}
                onChange={(e) => setNewLike(e.target.value)}
              />
              <button className="px-4 py-2 bg-var(--primary-green) text-white rounded-r-md" onClick={handleAddLike}>
                Add
              </button>
            </div>
          </div>

          {/* Foods You Don’t Like */}
          <div className="card bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-var(--primary-green) mb-4">Foods You Don’t Like</h2>
            <ul className="space-y-2 mb-3">
<<<<<<< HEAD
              {pendingDislikes.map((dislike, index) => (
<<<<<<< HEAD
                <li key={index} className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                  <span className="text-lg text-gray-800 font-medium">{dislike}</span>
                  <button className="text-red-700 hover:underline" onClick={() => handleRemoveDislike(dislike)}>
=======
              {user.dislikes.map((dislike, index) => (
                <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                  {dislike}
                  <button className="text-red-600" onClick={() => handleRemoveDislike(dislike)}>
>>>>>>> parent of 1144ed1 (Adding Submit Button)
=======
                <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                  {dislike}
                  <button className="text-red-600" onClick={() => handleRemoveDislike(dislike)}>
>>>>>>> parent of c9cfe4e (Added menu data, implemented dynamic category pages, improved search functionality, updated user profile page, redesigned homepage, and created M2 project board.)
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex">
              <input
                type="text"
                className="flex-grow p-2 border border-gray-300 rounded-l-md"
                placeholder="Add a food you dislike"
                value={newDislike}
                onChange={(e) => setNewDislike(e.target.value)}
              />
              <button className="px-4 py-2 bg-var(--primary-green) text-white rounded-r-md" onClick={handleAddDislike}>
                Add
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Submit Changes Button */}
        <div className="text-center mt-8">
          <button
            className="px-6 py-3 bg-var(--primary-green) text-white font-semibold rounded-lg hover:bg-var(--secondary-green)"
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
