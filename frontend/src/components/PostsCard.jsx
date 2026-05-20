import { BadgeCheck, Heart, MessageCircle, Share2 } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { dummyUserData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const PostsCard = ({ post }) => {
  const navigate = useNavigate()
  const [likes, setLikes] = useState(post.likes_count);
  const currentUser = dummyUserData;

  const handleLike = async () => {};

  const postWithHashtags = post.content.replace(
    /(#\w+)/g,
    '<span class="text-indigo-600">$1</span>',
  );

  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4 w-full max-w-2xl">
      {/* userInfo */}
      <div
      onClick={() => navigate('/profile/' + post.user._id)}
       className="inline-flex items-center gap-3 cursor-pointer">
        <img
          src={post.user.profile_picture}
          className="rounded-full h-10 w-10 shadow"
        />
        <div>
          <div className="flex items-center space-x-1">
            <span
              className="flex justify-center items-center gap-1
                    "
            >
              {post.user.full_name}
              <BadgeCheck className="w-4 h-4 text-blue-500" />
            </span>
          </div>
          <div className="text-gray-500 text-sm">
            @{post.user.username} . {moment(post.createdAt).fromNow()}
          </div>
        </div>
      </div>

      {/* content */}

      {post.content && (
        <div
          className="text-gray-800 text-sm whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: postWithHashtags }}
        />
      )}

      {/* images */}

      <div className="grid grid-cols-2 gap-2 h-auto">
        {post.image_urls.map((img, index) => (
          <img
            src={img}
            key={index}
            className={`w-full h-48 object-cover rounded-lg ${post.image_urls.length === 1 && "col-span-2 h-auto"}`}
            alt=""
          />
        ))}
      </div>

      {/* action btn */}
      <div className="flex items-center gap-4 text-gray-600 text-sm pt-2 border-t border-gray-300">
        <div className="flex items-center gap-1">
          <Heart
            className={`w-4 h-4 cursor-pointer ${likes?.includes(currentUser._id) && "text-red-500"}`}
            onClick={handleLike}
          />
          <span>{12}</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <MessageCircle className="w-4 h-4" />
          <span>{12}</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <Share2 className="w-4 h-4" />
          <span>{7}</span>
        </div>
      </div>
    </div>
  );
};

export default PostsCard;
