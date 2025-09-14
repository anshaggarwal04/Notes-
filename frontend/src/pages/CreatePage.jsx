import { ArrowLeftIcon } from 'lucide-react';
import {useState} from 'react'
import { Link } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreatePage = () => {
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("")
  const [loading,setLoading]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in both title and content");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:5001/api/notes", {
        title: title.trim(),
        content: content.trim()
      });
      
      toast.success("Note created successfully!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating note:", error);
      if (error.response?.status === 429) {
        toast.error("Rate limit exceeded. Please try again later.");
      } else {
        toast.error("Failed to create note. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5"/>
            Back To Notes
          </Link>
          
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold mb-4">Create New Note</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Title</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter note title..." 
                    className="input input-bordered w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={loading}
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Content</span>
                  </label>
                  <textarea 
                    className="textarea textarea-bordered h-32 resize-none" 
                    placeholder="Write your note content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    disabled={loading}
                  ></textarea>
                </div>
                
                <div className="card-actions justify-end">
                  <button 
                    type="submit" 
                    className={`btn btn-primary ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? 'Creating...' : 'Create Note'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage